// Generated by IcedCoffeeScript 108.0.11
(function() {
  var Base, ChangeMembership, Index, Leave, NewSubteam, Root, RotateKey, TeamBase, constants, json_stringify_sorted, make_esc, pgp_utils, streq_secure, unix_time, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Base = require('./base').Base;

  constants = require('./constants').constants;

  make_esc = require('iced-error').make_esc;

  pgp_utils = require('pgp-utils');

  _ref = pgp_utils.util, json_stringify_sorted = _ref.json_stringify_sorted, unix_time = _ref.unix_time, streq_secure = _ref.streq_secure;

  TeamBase = (function(_super) {
    __extends(TeamBase, _super);

    function TeamBase(obj) {
      this.team = obj.team;
      TeamBase.__super__.constructor.call(this, obj);
    }

    TeamBase.prototype._required_sections = function() {
      return TeamBase.__super__._required_sections.call(this).concat(["team"]);
    };

    TeamBase.prototype._v_customize_json = function(ret) {
      return ret.body.team = this.team;
    };

    return TeamBase;

  })(Base);

  exports.Index = Index = (function(_super) {
    __extends(Index, _super);

    function Index() {
      return Index.__super__.constructor.apply(this, arguments);
    }

    Index.prototype._type = function() {
      return constants.sig_types.team.index;
    };

    Index.prototype._type_v2 = function() {
      return constants.sig_types_v2.team.index;
    };

    return Index;

  })(TeamBase);

  exports.Root = Root = (function(_super) {
    __extends(Root, _super);

    function Root() {
      return Root.__super__.constructor.apply(this, arguments);
    }

    Root.prototype._type = function() {
      return constants.sig_types.team.root;
    };

    Root.prototype._type_v2 = function() {
      return constants.sig_types_v2.team.root;
    };

    return Root;

  })(TeamBase);

  exports.ChangeMembership = ChangeMembership = (function(_super) {
    __extends(ChangeMembership, _super);

    function ChangeMembership() {
      return ChangeMembership.__super__.constructor.apply(this, arguments);
    }

    ChangeMembership.prototype._type = function() {
      return constants.sig_types.team.change_membership;
    };

    ChangeMembership.prototype._type_v2 = function() {
      return constants.sig_types_v2.team.change_membership;
    };

    return ChangeMembership;

  })(TeamBase);

  exports.RotateKey = RotateKey = (function(_super) {
    __extends(RotateKey, _super);

    function RotateKey() {
      return RotateKey.__super__.constructor.apply(this, arguments);
    }

    RotateKey.prototype._type = function() {
      return constants.sig_types.team.rotate_key;
    };

    RotateKey.prototype._type_v2 = function() {
      return constants.sig_types_v2.team.rotate_key;
    };

    return RotateKey;

  })(TeamBase);

  exports.Leave = Leave = (function(_super) {
    __extends(Leave, _super);

    function Leave() {
      return Leave.__super__.constructor.apply(this, arguments);
    }

    Leave.prototype._type = function() {
      return constants.sig_types.team.leave;
    };

    Leave.prototype._type_v2 = function() {
      return constants.sig_types_v2.team.leave;
    };

    return Leave;

  })(TeamBase);

  exports.NewSubteam = NewSubteam = (function(_super) {
    __extends(NewSubteam, _super);

    function NewSubteam() {
      return NewSubteam.__super__.constructor.apply(this, arguments);
    }

    NewSubteam.prototype._type = function() {
      return constants.sig_types.team.new_subteam;
    };

    NewSubteam.prototype._type_v2 = function() {
      return constants.sig_types_v2.team.new_subteam;
    };

    return NewSubteam;

  })(TeamBase);

}).call(this);
